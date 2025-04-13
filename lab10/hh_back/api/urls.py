from django.urls import path
from .views import company_list, VacancyListAPIView

urlpatterns = [
    path('companies/', company_list),
    path('vacancies/', VacancyListAPIView.as_view()),
]
