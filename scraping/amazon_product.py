from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
import warnings
import time

warnings.filterwarnings("ignore")


def returnAmazon():
    driver = webdriver.Chrome()
    driver.get(
        "https://www.amazon.in/OnePlus-Nord-Chromatic-128GB-Storage/dp/B0BY8MCQ9S"
    )
    time.sleep(10)
    wait = WebDriverWait(driver, 10)
    user_data = driver.find_elements(
        By.XPATH,
        '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[3]/span[2]/span[2]',
    )
    print()
    return user_data[0].get_attribute("outerHTML")


z = returnAmazon()
print(z)
