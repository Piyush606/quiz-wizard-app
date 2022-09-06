from django.db import models

# Create your models here.

class Course(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return self.title

class Subject(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    course_id = models.ForeignKey("Course", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Chapter(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    subject_id = models.ForeignKey("Subject", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Test(models.Model):
    title = models.CharField(max_length=100) 
    date = models.DateField()
    time = models.IntegerField()
    course_id = models.ManyToManyField(to=Course)
    subject_id = models.ManyToManyField(to=Subject)
    chapter_id = models.ForeignKey("Chapter", on_delete=models.CASCADE, null=True, blank=True)
    no_of_questions = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Question(models.Model):  
    statement = models.CharField(max_length=500)
    image_link = models.CharField(max_length=100, null=True, blank=True)
    option1 = models.CharField(max_length=100)
    op1_image = models.CharField(max_length=100, null=True, blank=True)
    option2 = models.CharField(max_length=100)
    op2_image = models.CharField(max_length=100, null=True, blank=True)
    option3 = models.CharField(max_length=100)
    op3_image = models.CharField(max_length=100, null=True, blank=True)
    option4 = models.CharField(max_length=100)
    op4_image = models.CharField(max_length=100, null=True, blank=True)
    correct_option = models.IntegerField()
    explaination = models.TextField()
    explaination_image = models.CharField(max_length=100, null=True, blank=True)
    subject_id = models.ForeignKey("Subject", on_delete=models.CASCADE)
    chapter_id = models.ForeignKey("Chapter", on_delete=models.CASCADE)
    course_id = models.ForeignKey("Course", on_delete=models.CASCADE)

    def __str__(self):
        return str(self.statement)

class Contact(models.Model):
    name = models.CharField(max_length=60)
    email = models.CharField(max_length=60)
    query = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.name

# class FilesUpload(models.Model):
#     images = models.FileField(upload_to='img')     

# class csvUpload(models.Model):
#     qcsv = models.FileField(upload_to='csv')

#     def __str__(self):
#         return str(self.qcsv)

# class Pdf(models.Model):
#     title = models.CharField(max_length=100)      
#     link = models.CharField(max_length=100)

#     def __str__(self):
#         return str(self.title)

# class Video(models.Model):
#     title = models.CharField(max_length=100)     
#     link = models.CharField(max_length=100)     

#     def __str__(self):
#         return str(self.title)

# class Blog(models.Model):
#     image = models.FileField(upload_to='blog/', max_length=254, default=None, null=True)
#     heading = models.TextField()
#     description = models.TextField()   
#     # new_slug = AutoSlugField(populate_from='heading', unique=True, null=True, default=None)

#     def __str__(self):
#         return str(self.id)     