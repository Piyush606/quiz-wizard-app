from django.contrib import admin
from .models import Course, Subject, Chapter, Test, Question

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')

class SubjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'course_id')
 
class ChapterAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'subject_id')
 
class TestAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'time', 'no_of_questions', 'subject_id', 'chapter_id', 'course_id')
 
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('statement', 'image_link', 'option1', 'op1_image', 'option2', 'op2_image', 'option3', 'op3_image', 'option4', 'op4_image', 'correct_option', 'explaination', 'explaination_image', 'subject_id', 'chapter_id')
 
# Register your models here.
admin.site.register(Question)
admin.site.register(Test)
admin.site.register(Course)
admin.site.register(Subject)
admin.site.register(Chapter)