from rest_framework import serializers
from .models import Course, Subject, Chapter, Test, Question

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id', 'title', 'date')

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ('id', 'title', 'date', 'course_id')

class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ('id', 'title', 'date', 'subject_id')

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('id', 'title', 'date', 'time', 'no_of_questions', 'subject_id', 'chapter_id', 'course_id')

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ('id', 'statement', 'image_link', 'option1', 'op1_image', 'option2', 'op2_image', 'option3', 'op3_image', 'option4', 'op4_image', 'correct_option', 'explaination', 'explaination_image', 'subject_id', 'chapter_id')

    # def to_representation(self, instance):
    #     """
    #     Object instance -> Dict of primitive datatypes.
    #     """
    #     return {
    #         "datasets": [
    #             {
    #                 "label": "id",
    #                 "data": instance.id
    #             },
    #             {
    #                 "label": "statement",
    #                 "data": instance.statement
    #             },
    #             {
    #                 "label": "image_link",
    #                 "data": instance.image_link
    #             },
    #             {
    #                 "label": "option1",
    #                 "data": instance.option1
    #             },
    #             {
    #                 "label": "op1_image",
    #                 "data": instance.op1_image
    #             },
    #             {
    #                 "label": "option2",
    #                 "data": instance.option2
    #             },
    #             {
    #                 "label": "op2_image",
    #                 "data": instance.op2_image
    #             },
    #             {
    #                 "label": "option3",
    #                 "data": instance.option3
    #             },
    #             {
    #                 "label": "op3_image",
    #                 "data": instance.op3_image
    #             },
    #             {
    #                 "label": "option4",
    #                 "data": instance.option4
    #             },
    #             {
    #                 "label": "op4_image",
    #                 "data": instance.op4_image
    #             },
    #             {
    #                 "label": "correct_option",
    #                 "data": instance.correct_option
    #             },
    #             {
    #                 "label": "explaination",
    #                 "data": instance.explaination
    #             },
    #             {
    #                 "label": "explaination_image",
    #                 "data": instance.explaination_image
    #             },
    #             {
    #                 "label": "subject_id",
    #                 "data": instance.subject_id
    #             },
    #             {
    #                 "label": "chapter_id",
    #                 "data": instance.chapter_id
    #             }
    #         ]
    #     }