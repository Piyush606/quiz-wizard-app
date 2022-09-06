from operator import truediv
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import action
from .serializers import CourseSerializer, SubjectSerializer, ChapterSerializer, TestSerializer, QuestionSerializer
from .models import Course, Subject, Chapter, Test, Question
import random
from django.http import JsonResponse, response, HttpResponse
import json
from rest_framework.response import Response
from django.forms.models import model_to_dict
from django.core import serializers


# Create your views here.

class CourseView(viewsets.ModelViewSet):
   serializer_class = CourseSerializer
   queryset = Course.objects.all()

class SubjectView(viewsets.ModelViewSet):
   serializer_class = SubjectSerializer
   # queryset = Subject.objects.all()
   def get_queryset(self):
      queryset = Subject.objects.all()
      id = self.request.query_params.get('course_id')
      if id is not None:
         queryset = queryset.filter(course_id=id)
      return queryset

class ChapterView(viewsets.ModelViewSet):
   serializer_class = ChapterSerializer
   queryset = Chapter.objects.all()

class TestView(viewsets.ModelViewSet):
   serializer_class = TestSerializer

   def get_queryset(self):
      queryset = Test.objects.all()
      id = self.request.query_params.get('subject_id')
      if id is not None:
         queryset = queryset.filter(subject_id=id)
      return queryset

class NewApi(APIView):
   def get(self, request):
      chapter_id = request.GET.get("chapter_id")
      course_id = request.GET.get("course_id")
      subject_id = request.GET.get("subject_id")
      noq = request.GET.get("noq")
      course_id = course_id.split(",")
      subject_id =subject_id.split(",")
      noq = noq.split(",")
      quesDict = {}
      arr2 = []
      if chapter_id == "null":
         i=0
         for id in subject_id:
            arr = []
            queryset = Question.objects.filter(subject_id=int(id))
            queryset2 = Subject.objects.filter(id=int(id))
            serializer_class = QuestionSerializer(queryset, many=True)
            serializer_class2 = SubjectSerializer(queryset2, many=True)
            qcount = Question.objects.filter(subject_id=int(id)).count()
            arr3 = random.sample(range(0, qcount), int(noq[i]))
            for random_number in arr3:
               arr.append(serializer_class.data[random_number])
            i+=1
            quesDict[serializer_class2.data[0]['title']] = arr
         arr2.append(quesDict)
      return JsonResponse(arr2, safe=False)

