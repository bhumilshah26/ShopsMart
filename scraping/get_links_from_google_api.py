import requests


def get_second_link(query):
    api_key = "YOUR_API_KEY"
    cx = "YOUR_CUSTOM_SEARCH_ENGINE_ID"
    url = f"https://www.googleapis.com/customsearch/v1?q={query}&key=AIzaSyCmEvtb_aXNPFLJNeOPjepFKB_q5wW-Xuc&cx=e370dab511c5b4148"

    response = requests.get(url)
    data = response.json()

    if "items" in data and len(data["items"]) >= 2:
        second_link = data["items"][1]["link"]
    else:
        second_link = None

    return second_link


# Example usage:
query = "iphone 13 amazon"
second_link = get_second_link(query)
print("Second link:", second_link)
