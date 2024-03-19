from django.shortcuts import render, redirect
import requests
from rest_framework.response import Response
from .serializers import ApiCodeSerializer
from .forms import CustomUserForm
from rest_framework.decorators import api_view


def front(request):
    context = { }
    return render(request, "index.html", context)


# This is the home page
def home(request):
    # ak = "3e9e926f-9dcd-4b1f-9df6-f74365275f1a"
    # gURL = "http://13.48.136.54:8000/api/api-code/"
    # headers = {
    #     "Authorization": f"Bearer {ak}"
    # }
    # response = requests.post(gURL, headers=headers)

    # if response.status_code == 200:
    #     api_code = response.json().get('api_code', "No api code received")
    # else:
    #     api_code = "Error in retrieving api code"
    # context = {"api_code": api_code}
    return render(request, 'index.html')

def ApiCodeShow(request):
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
    
    serializer = ApiCodeSerializer({'api_code': api_code})
    print(f"\n\n{serializer.data}\n\n")
    return Response(serializer.data)

# The get request for apicode
@api_view(['GET'])
def get_api_code(request):
    return ApiCodeShow(request)

# Function for validating and registerin the user
def register_user(request):
    form = CustomUserForm()
    if request.method == 'POST':
        form = CustomUserForm(request.POST)
        if form.is_valid():            
            form.save()
            return redirect('home')
    else:
        form = CustomUserForm()

    context = {
        'form': form,
    }

    return render(request, 'base/registration.html', context)


