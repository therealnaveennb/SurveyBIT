#include<stdio.h>

int main(){
    int num;
    scanf("%d",&num);
    int sumE=0;
    int sumO=0;
    int count=0;
    while(num>0){
        int digit=num%10;
        count++;
        num/=10;
    }
    printf("%d",sumE);
    printf("%d",sumO);
}