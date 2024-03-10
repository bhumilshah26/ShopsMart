from selenium import webdriver
from fastapi import FastAPI, HTTPException
import re
import json

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")
# chrome_options.add_argument("--headless")
# chrome_options.add_argument("--disable-gpu")

chrome_options.add_argument(
    "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36"
)
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import csv
import pandas as pd

# https://www.amazon.in/s?k=iphone+13

# Flow right now
""" 
1. Search amazon
2. Select top 3 products
3. Go to the product page 
4. Go to the product review page
5. Extract reviews 
"""


def make_query(search_text):
    query_list = search_text.lower().split(" ")
    query = f"{query_list[0]}"
    for query_term in query_list[1:]:
        query = query + f"+{query_term}"

    return query


def search_amazon(query):
    print(f"https://www.amazon.in/s?k={query}")
    return f"https://www.amazon.in/s?k={query}"


# driver.get("https://www.amazon.in/iphone-13/s?k=iphone+13"
def get_amazon_page_list(page_link, product_name):
    driver = webdriver.Chrome(options=chrome_options)
    product_name = product_name.replace(" ", "_")
    driver.get(page_link)
    time.sleep(1)
    with open(
        f"amazon_{product_name}_search.csv", "w", newline="", encoding="utf-8"
    ) as search_page:
        search_writer = csv.writer(search_page)
        search_writer.writerow(
            [
                "Name",
                "Link",
                "Image_link",
                "Price",
                "Number_of_ratings",
                "Discount",
                "Fastes_delivery_date",
                "Bought_last_month",
                "About_iten",
            ]
        )
        for i in range(5, 10):
            xpath_page = f'//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[{i}]/div/div/span/div/div/div/div[2]/div/div/div[1]/h2/a'
            # //*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[5]/div/div/span/div/div/div/div[2]/div/div/div[1]/h2/a
            # xpath_price = f'//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[{i}]/div/div/span/div/div/div/div[2]/div/div/div[3]/div[1]/div/div[1]/div[1]/div[1]/a/span/span[2]/span[2]'
            #                #//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[4]/div/div/div/div/span/div/div/div/div[2]/div/div/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/span/span[2]/span[2]
            # //*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[6]/div/div/span/div/div/div/div[2]/div/div/div[3]/div[1]/div/div[1]/div[2]/div[1]/a/span/span[2]/span[2]
            # xpath_no_of_ratings = f'//*[@id="search"]/div[1]/div[1]/div/span[1]/div[1]/div[{i}]/div/div/span/div/div/div/div[2]/div/div/div[2]/div[1]/span[2]/a/span'

            try:
                page_element = driver.find_element(By.XPATH, xpath_page)
                name = page_element.find_element(By.TAG_NAME, "span")
                # price = driver.find_element(By.XPATH, xpath_price)
                # no_of_ratings = driver.find_element(By.XPATH, xpath_no_of_ratings)
                search_writer.writerow(
                    [
                        name.text,
                        page_element.get_attribute("href"),
                    ]
                )

                print(name.text)
                print(page_element.get_attribute("href"))
                # print(price.text)
                # print(no_of_ratings.text)

            except:
                print("Couldnt find element")


def get_review_page(link, p_name):
    driver = webdriver.Chrome(options=chrome_options)
    driver.get(link)
    WebDriverWait(driver, 5)
    df = pd.read_csv(f"amazon_{p_name}_search.csv")
    try:
        reviews_link = driver.find_element(
            By.XPATH, '//*[@id="reviews-medley-footer"]/div[2]/a'
        )
    except:
        print()

    try:
        image = driver.find_element(By.XPATH, '//*[@id="main-image"]')
        image_link = image.get_attribute("src")
    except:
        image_link = None
        print("Couldnt find image")
    try:
        price = driver.find_element(
            By.XPATH,
            '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[3]/span[2]/span[2]',
        )
        print(price.text)
        price = price.text
    except:
        price = None
        print("Couldnt find price")

    try:
        discount = driver.find_element(
            By.XPATH, '//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]'
        )
        print(discount.text)
        discount = discount.text
    except:
        discount = None
        print("Couldnt find discount")

    try:
        no_of_ratings = driver.find_element(
            By.XPATH, '//*[@id="acrCustomerReviewText"]'
        )
        print(no_of_ratings.text)
        no_of_ratings = no_of_ratings.text
    except:
        no_of_ratings = None
        print("couldnt find no of ratings")
    try:
        about_item = driver.find_element(By.XPATH, '//*[@id="feature-bullets"]/ul')
        print(about_item)
        about_item_para = ""
        about_points = about_item.find_elements(By.TAG_NAME, "span")
        for _ in about_points:
            about_item_para += f"{_.text}"
    except:
        about_item_para = None
        print("couldnt find about item")

    try:
        fastest_delivery = driver.find_element(
            By.XPATH,
            '//*[@id="mir-layout-DELIVERY_BLOCK-slot-PRIMARY_DELIVERY_MESSAGE_LARGE"]/span/span',
        )
        print(fastest_delivery.text)
        fastest_delivery = fastest_delivery.text
    except:
        fastest_delivery = None
        print("Couldnt find fastest_delivery")

    try:
        bought_last_month = driver.find_element(
            By.XPATH, '//*[@id="social-proofing-faceout-title-tk_bought"]/span[1]'
        )
        print(bought_last_month.text)
        bought_last_month = bought_last_month.text
    except:
        bought_last_month = None
        print("couldnt find bought last month")

    new_data = {
        "Image_link": image_link,
        "Price": price,
        "Number_of_ratings": no_of_ratings,
        "Discount": discount,
        "Fastest_delivery_date": fastest_delivery,
        "Bought_last_month": bought_last_month,
        "About_item": about_item_para,
    }

    df.loc[
        df["Link"] == link,
        [
            "Image_link",
            "Price",
            "Number_of_ratings",
            "Discount",
            "Fastest_delivery_date",
            "Bought_last_month",
            "About_item",
        ],
    ] = [
        new_data["Image_link"],
        new_data["Price"],
        new_data["Number_of_ratings"],
        new_data["Discount"],
        new_data["Fastest_delivery_date"],
        new_data["Bought_last_month"],
        new_data["About_item"],
    ]
    df.to_csv(f"amazon_{p_name}_search.csv", index=False)
    print("1st function worked")
    link_r = reviews_link.get_attribute("href")
    driver.quit()
    return link_r


def sanitize_file_name(file_name):
    sanitized_name = re.sub(r'[<>:"/\\|?*]', "_", file_name)
    return sanitized_name


def get_review_elements(review_page_link, p_name):
    print("Starting 2nd function")
    driver = webdriver.Chrome(options=chrome_options)
    with open(
        f"amazon_{p_name}_reviews.csv", "w", newline="", encoding="utf-8"
    ) as reviews:
        review_writer = csv.writer(reviews)
        review_writer.writerow(["reviewer_name", "review_title", "review"])
        for i in range(1, 6):
            review_page = review_page_link + f"&pageNumber={i}"
            # print(review_page)
            driver.get(review_page)

            name_elements = driver.find_elements(By.CLASS_NAME, "a-profile-name")
            title_elements = driver.find_elements(
                By.CSS_SELECTOR, 'a[data-hook="review-title"]'
            )
            review_elements = driver.find_elements(
                By.CSS_SELECTOR, 'span[data-hook="review-body"]'
            )
            # print(len(name_elements), len(title_elements), len(review_elements))
            try:

                for j in range(len(title_elements)):
                    review_writer.writerow(
                        [
                            name_elements[j + 2].text,
                            title_elements[j].text,
                            review_elements[j].text,
                        ]
                    )
            except:
                print()

            # for name in name_elements:
            #     print(name.text)
        driver.quit()


def return_json_dict(product_name_with_underscore):
    df = pd.read_csv(f"amazon_{product_name_with_underscore}_search.csv")
    return_dict = {}
    i = 0
    for index, row in df.iterrows():
        to_append_dict = {}
        to_append_dict["Name"] = row["Name"]
        to_append_dict["Image_link"] = str(row["Image_link"])
        to_append_dict["Price"] = str(row["Price"])
        to_append_dict["Fastes_delivery_date"] = str(row["Fastes_delivery_date"])
        to_append_dict["Bought_last_month"] = str(row["Bought_last_month"])
        to_append_dict["Number_of_ratings"] = str(row["Number_of_ratings"])
        return_dict[f"product{i}"] = to_append_dict
        i += 1
    json_data = json.dumps(return_dict)

    print(json_data)
    return json_data


app = FastAPI()


@app.get("/")
async def read_root():
    return {"message": "Welcome to the Product Comparator API!"}


@app.get("/get_products/")
async def get_amazon_reviews(product_name: str):
    product_name.lower()
    amazon_link = search_amazon(make_query(product_name.lower()))
    get_amazon_page_list(amazon_link, product_name)
    product_name = product_name.replace(" ", "_")
    product_name = sanitize_file_name(product_name)

    print(product_name)

    df = pd.read_csv(f"amazon_{product_name}_search.csv")
    for index, row in df.iterrows():
        p_name = row["Name"]
        p_link = row["Link"]
        # p_price = row['Price']
        # no_ratings = row['Number_of_ratings']
        p_name = p_name.replace(" ", "_")
        p_name = str(sanitize_file_name(p_name))
        p_review_page_link = get_review_page(p_link, product_name)
        get_review_elements(p_review_page_link, p_name)

    json_dict = return_json_dict(product_name)

    return json_dict
    # df = pd.read_csv(f"amazon_{product_name}_search.csv")
    # return_dict = {}
    # for index, row in df.iterrows():
    #     to_append_dict = {}
    #     # to_append_dict["Name"] = row["Name"]
    #     to_append_dict["Price"] = row["Price"]
    #     to_append_dict["Fastes_delivery_date"] = row["Fastes_delivery_date"]
    #     to_append_dict["Bought_last_month"] = row["Bought_last_month"]
    #     to_append_dict["Number_of_ratings"] = row["Number_of_ratings"]
    #     return_dict[f"{row['Name']}"] = to_append_dict
    # for name in df_og["Name"]:
    #     name = name.replace(" ", "_")
    #     df = pd.read_csv(f"amazon_{name}_reviews.csv")
    #     for review in df["review"]:


# get_amazon_reviews("samsung tv")


# get_review_page(
#     "https://www.amazon.in/Samsung-inches-Ready-UA32T4380AKXXL-Glossy/dp/B0B8YTGC23/ref=sr_1_3?dib=eyJ2IjoiMSJ9.YlMs65UEP2uAEeVG8gepex2P-0MSPO73Z5uGBwtN6HnGQ85hd8jpVE-YmRPalYx8UYNYI9Z9Uqyg0orYe178BOHbjlGHn5uwZ9oWcH_0ELAAX5l-X3efoJbDb7ZeiRHaE1lunfGCExczEzBdvWakLW01hsyJiHf8uEpLXSTZiaOLxdOEvqgDhvUAuuEkmWD_LelaEGx_xP4La1QQDJVm_KShWcGYY6BynJgcCcchH_Q.3o5jPtHM7zQXGBKj2AIGQT_W6jex3U6GT5fEDMo9W88&dib_tag=se&keywords=samsung+tv&qid=1709981100&sr=8-3"
# )

# get_amazon_reviews("samsung tv")

# df_og = pd.read_csv(f"amazon_samsung tv_search.csv")

# for name in df_og["Name"]:
#     name = name.replace(" ", "_")
#     df = pd.read_csv(f"amazon_{name}_reviews.csv")
#     for review in df["review"]:
#         print(review[:10])

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
