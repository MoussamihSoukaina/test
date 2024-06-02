from django.db import models
from datetime import datetime

class Feedback(models.Model):
    message = models.CharField(max_length=255)
    feedback_type = models.CharField(max_length=50)
    created_at = models.DateTimeField()

    def __str__(self):
        return self.message

    def save(self, *args, **kwargs):
        if not self.created_at:
            self.created_at = datetime.now()
        super().save(*args, **kwargs)
