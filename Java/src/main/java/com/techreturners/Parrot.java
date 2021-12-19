package com.techreturners;

public class Parrot extends Bird{
    public Parrot(String name, String colour){
        super(name, colour);
    }

    @Override
    public void speak() {
        System.out.println("Hello! I'm " + name + " and I'm a " + color + " parrot.");
        System.out.println("Happy Bird-day to meeeee!!!");
    }
}
