package com.techreturners;

public class activity2 {
    public static void main(String[] args) {
        //activity2
        //Bird myBird = new Bird("Tweety", "Yellow");
        //myBird.speak();
        //myBird.fly();
        Pigeon pippa = new Pigeon("Pippa", "Grey");
        pippa.speak();
        pippa.fly();
        pippa.eatPizza();
        pippa.sleep();
        pippa.spin();
        pippa.doTheCaterpillar();
        pippa.jump();

        Penguin pingu = new Penguin("Pingu", "Black & White");
        pingu.speak();
        pingu.fly();
        pingu.spin();
        pingu.doTheCaterpillar();
        pingu.jump();

        Parrot ollie = new Parrot("Ollie", "Green");
        ollie.speak();
    }
}
