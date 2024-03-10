from selenium import webdriver

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


driver = webdriver.Chrome(options=chrome_options)

driver.get("https://www.youtube.com/results?search_query=city+of+stars")

# data = driver.find_elements(By.ID, "thumbnail")
# links = []
# for i in data:
#     arr = i.get_attribute("href")
#     if "shorts" not in arr:
#         links.append(arr)

video_elements = driver.find_elements(By.ID, "video-title")
links = [video.get_attribute("href") for video in video_elements]

# for link in links[:5]:
#     if link != None:
#         driver.get(link)
#         wait = WebDriverWait(driver, 10)
#         time.sleep(5)
#         comments = driver.find_elements(By.CSS_SELECTOR, "#content-text")
#         print(f"\nTop 10 comments for {link}:")
#         print(comments)
#         # for comment in comments[:10]:
#         #     print(comment.text)
#         #     print()
#     print()
#     print()


for link in links:
    if link != None:
        driver.get(link)
        time.sleep(
            5
        )  # Waiting for the page to load, you can use explicit waits for better handling
        driver.execute_script(
            "window.scrollTo(0, document.body.scrollHeight);"
        )  # Scroll to load all comments
        # driver.sendKeys(Keys.PAGE_DOWN)
        # Wait for comments to load
        # comments = driver.execute_script(
        #     """
        #     return Array.from(document.querySelectorAll('ytd-comment-renderer #content'))
        #                 .map(comment => comment.textContent);
        # """
        # )
        # body = driver.find_element(By.CLASS_NAME, "style-scope ytd-watch-flexy")
        # print(body)
        # body.send_keys(Keys.ARROW_DOWN)
        driver.execute_script("window.scrollBy(0, 800);")
        print("Should scroll down now")
        time.sleep(2)
        comments = driver.find_elements(By.CSS_SELECTOR, "#content-text")
        print(comments)
        print(f"\nTop 10 comments for {link}:")
        for comment in comments[:10]:
            print(comment)


# time.sleep(5)
driver.quit()
