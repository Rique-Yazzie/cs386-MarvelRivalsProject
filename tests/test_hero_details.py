import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

@pytest.fixture
def browser():
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    yield driver
    driver.quit()

def test_hero_card_interaction_and_details_navigation(browser):
    # Navigate to the character index page
    browser.get("http://127.0.0.1:5500/characterIndex.html")

    # Wait for hero cards to load
    WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.CLASS_NAME, "hero-card"))
    )

    # Scroll to Spider-Man's card and ensure it's clickable
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    spider_man_card = WebDriverWait(browser, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//div[contains(@class, 'hero-card')]//p[text()='Spider-Man']"))
    )
    browser.execute_script("arguments[0].scrollIntoView(true);", spider_man_card)
    time.sleep(1)
    browser.execute_script("arguments[0].click();", spider_man_card)

    # Wait for the popup to appear
    popup = WebDriverWait(browser, 10).until(
        EC.presence_of_element_located((By.ID, "hero-popup"))
    )

    # Verify popup content
    hero_name = popup.find_element(By.ID, "popup-hero-name").text
    hero_role = popup.find_element(By.ID, "popup-hero-role").text
    hero_description = popup.find_element(By.ID, "popup-hero-description").text
    assert hero_name == "Spider-Man"
    assert hero_role == "Duelist"
    assert "Peter Parker" in hero_description

    # Verify abilities are displayed
    abilities_list = popup.find_element(By.ID, "popup-hero-abilities")
    abilities = abilities_list.find_elements(By.TAG_NAME, "li")
    assert len(abilities) > 0

    # Click the More Details button
    more_details_button = popup.find_element(By.XPATH, "//button[contains(text(), 'More Details')]")
    browser.execute_script("arguments[0].click();", more_details_button)

    # Verify navigation to the details page
    assert "spider_man.html" in browser.current_url 