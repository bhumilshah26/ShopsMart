from selenium import webdriver
import requests

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
chrome_options.add_argument(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import csv


def make_query_amazon(search_text):
    query_list = search_text.lower().split(" ")
    query = f"{query_list[0]}"
    for query_term in query_list[1:]:
        print(query)
        query = query + f"+{query_term}"

    query += "+amazon"
    return query


def make_query_flipkart(search_text):
    query_list = search_text.lower().split(" ")
    query = f"{query_list[0]}"
    for query_term in query_list[1:]:
        print(query)
        query = query + f"+{query_term}"

    query += "+buy+now+flipkart"
    return query


def get_second_link(query):
    api_key = "YOUR_API_KEY"
    cx = "YOUR_CUSTOM_SEARCH_ENGINE_ID"
    url = f"https://www.googleapis.com/customsearch/v1?q={query}&key=AIzaSyCmEvtb_aXNPFLJNeOPjepFKB_q5wW-Xuc&cx=e370dab511c5b4148"
    print(url)

    response = requests.get(url)
    data = response.json()

    if "items" in data and len(data["items"]) >= 2:
        second_link = data["items"][2]["link"]
    else:
        second_link = None

    return second_link


print(get_second_link(make_query_amazon("samsung galaxy s24")))
print(get_second_link(make_query_flipkart("samsung galaxy s24")))


# apikey = AIzaSyCmEvtb_aXNPFLJNeOPjepFKB_q5wW - Xuc

# cx = e370dab511c5b4148

# def get_amazon_link(query):
#     driver = webdriver.Chrome(options=chrome_options)
#     google_link = f"https://www.google.com/search?q={query}+amazon"
#     print(google_link)
#     driver.get(google_link)

#     # link_element = driver.find_element(
#     #     By.XPATH, '//*[@id="rso"]/div[1]/div/div/div[1]/div/div/span/a'
#     # )
#     search_results = driver.find_elements(
#         By.XPATH, "//div[@class='tF2Cxc']/div[@class='yuRUbf']/a"
#     )
#     # print(link_element.get_attribute("href"))
#     print(search_results)
