from django.shortcuts import render
from django.http import HttpResponse
import requests





def home(request):
    ak = "3e9e926f-9dcd-4b1f-9df6-f74365275f1a"
    gURL = "http://13.48.136.54:8000/api/api-code/"
    headers = {
        "Authorization": f"Bearer {ak}"
    }
    
    response = requests.post(gURL, headers=headers)

    if response.status_code == 200:
        api_code = response.json().get('api_code', "No api code received")
    else:
        api_code = "Error in retrieving api code"
    context = {"api_code": api_code}
    return render(request, 'base/home.html', context)

# def footer(reque)