from django.shortcuts import render

# Create your views here.
def post_list(request):
    return render(request, 'blog/sample/index.html', {})

def fun(request):
    return render(request, 'blog/sample/homapge.html',{})