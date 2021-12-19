package com.techreturners;

public class Penguin extends Bird{
    public Penguin(String name, String colour){
        super(name, colour);
    }

    @Override
    public void speak() {
        System.out.println("Yo! I'm " + name + " and I'm a " + color + " penguin.");
    }

    @Override
    public void fly() {
        System.out.println("Whoops, I can't fly. Waddle waddle.");
    }
}
