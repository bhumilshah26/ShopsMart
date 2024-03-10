from selenium import webdriver

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

import csv


driver = webdriver.Chrome(options=chrome_options)

# links of competetors are stored in 'links' list
driver.get("https://www.zomato.com/mumbai/ettarra-1-juhu")
time.sleep(2)
link_elements = driver.find_elements(By.CLASS_NAME, "sc-bnOsYM.ijtuwB")
links = {link_element.get_attribute("href") for link_element in link_elements}

# converting to list
links = list(links)

for link in links:
    driver.get(f"{link}/reviews")
    time.sleep(2)
    # review_elements = driver.find_elements(
    #     By.XPATH, "//p[@class='sc-1hez2tp-0.sc-dAWfgX.kCCGzy']"
    # )
    review_elements = driver.find_elements(
        By.CLASS_NAME, "sc-1hez2tp-0.sc-dAWfgX.kCCGzy"
    )
    reviews = [review.text for review in review_elements]
    print(review_elements)

# def create_reviews_csv():
#     with open("reviews.csv", "w", newline="") as file:
#         writer = csv.writer(file)
#         writer.writerow(["Cafe", "Review", "Sentiment"])
#         for link in links:
#             driver.get(f"{link}/reviews")
#             review_elements = driver.find_elements(
#                 By.CLASS_NAME, "sc-1hez2tp-0.sc-dAWfgX.kCCGzy"
#             )
#             reviews = [review.text for review in review_elements]
#             print(reviews)

#             for review in reviews:
#                 writer.writerow([review, ""])


# create_reviews_csv()
driver.quit()


from fastapi import FastAPI, HTTPException
import pandas as pd

app = FastAPI()

restaurant_database = r"C:\Desktop\Restaurant_Comparator\data_collection\web_scraping\restaurant_database.csv"

# Load the restaurant database
df = pd.read_csv(restaurant_database)


def get_res_name(restaurant_link):
    for index, row in df.iterrows():
        if restaurant_link in row["Link"]:
            restaurant_name = row["Name"]

    return restaurant_name.lower().replace(" ", "_")


@app.get("/")
async def read_root():
    return {"message": "Welcome to the Restaurant Comparator API!"}


@app.get("/analyze_sentiment/")
async def analyze_sentiment(restaurant_name: str):
    restaurant_name = restaurant_name.lower()
    df = pd.read_csv(restaurant_database)

    res_name_in = restaurant_name.split(" ")
    print(res_name_in)
    df = pd.read_csv(restaurant_database)
    res_link = None
    res_name = None
    for index, row in df.iterrows():
        if res_name_in[0] in row["Link"] and res_name_in[1] in row["Link"]:
            res_link = row["Link"]
            res_name = row["Name"]
            print("Found the res")

    def get_res_name(restaurant_link):
        for index, row in df.iterrows():
            if restaurant_link in row["Link"]:
                restaurant_name = row["Name"]

        return restaurant_name.lower().replace(" ", "_")

    res_name = res_name.lower().replace(" ", "_")
    print(res_name, res_link)

    get_reviews(res_name, res_link)
    compe_links = get_competetior_reviews(res_link)

    for link in compe_links:
        get_reviews(get_res_name(link), link)
    sentiment_score = get_sentiment(res_name)
    return {"restaurant_name": restaurant_name, "sentiment_score": sentiment_score}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
