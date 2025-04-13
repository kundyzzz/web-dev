from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from .models import Company, Vacancy
from .serializers import CompanyModelSerializer, VacancySerializer

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CompanyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            vacancy = Vacancy.objects.create(**serializer.validated_data)
            return Response(VacancySerializer(vacancy).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
