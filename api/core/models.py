from django.db import models

class OtherMenu(models.Model):
    TEMPERAUTRE = (
        ("Hot", "Hot"),
        ("Ice", "Ice"),
        ("Hot Only", "Hot Only"),
        ("Ice Only", "Ice Only"),
    )
    ESPRESSO = (
        ("Single", "Single"),
        ("Double", "Double"),
    )
    name = models.CharField(max_length=50)
    picture = models.FileField()
    water_temperature = models.CharField(choices=TEMPERAUTRE, max_length=10, null=True)
    espresso = models.CharField(choices=ESPRESSO ,max_length=50, null=True)
    soft_drink = models.BooleanField(default=False)
    for_kids = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Menu(models.Model):
    SIZE = (
        ("Small", "Small"),
        ("Regular", "Regular"),
        ("Large", "Large"),
    )
    name = models.CharField(max_length=50)
    picture = models.FileField()
    size = models.CharField(choices=SIZE, max_length=30)
    price = models.CharField(max_length=10)

    def __str__(self):
        return self.name


