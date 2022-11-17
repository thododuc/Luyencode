#include <stdio.h>
#include <conio.h>

int main()
{
    char name[20];
    float mk = 0; // mk= marks scored out of 100
    float percentage, average, mk_total = 0; // mk_total = total marks
    char grade;

    printf("Enter your name : ");
    gets(name);

    printf("Enter your marks (out of 100) in 5 subjects repsectively :\n");
	int counter;
    for (counter = 1; counter <= 5; ++counter)
    {
        scanf("%f", &mk);
        mk_total += mk;
    }

    percentage = (mk_total / 500) * 100;
    average = (mk_total / 5);

    if (average < 50)
        grade = 'F';
    if (average >= 50 && average < 60)
        grade = 'C';
    if (average >= 60 && average < 70)
        grade = 'B';
    if (average >= 70 && average < 80)
        grade = 'B';
    if (average >= 80 && average < 90)
        grade = 'A';
    if (average >= 90 && average <= 100)
        grade = 'O';

    printf("Name of the Student : %s\n", name);
    printf("Total marks secured : %g\n", mk_total);
    printf("Percentage secured  : %g\n", percentage);
    printf("Grade secured       : %c\n", grade);

    return 0;
}
