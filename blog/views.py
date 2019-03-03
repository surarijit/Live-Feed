from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'blog/index.html', {})

def func(request):
    return render(request, 'blog/homapge.html',{})
