using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            //Bird myBird = new Bird("Tweety", "Yellow");
            //myBird.Speak();
            //myBird.Fly();

            Pigeon pippa = new Pigeon("Pippa", "Grey");
            pippa.Speak();
            pippa.Fly();
            pippa.EatPizza();
            pippa.Sleep();
            pippa.Spin();
            pippa.DoTheCaterpillar();
            pippa.Jump();

            Penguin pingu = new Penguin("Pingu", "Black & White");
            pingu.Speak();
            pingu.Fly();
            pingu.Spin();
            pingu.DoTheCaterpillar();
            pingu.Jump();

            Parrot ollie = new Parrot("Ollie", "Green");
            ollie.Speak();
            ollie.Spin();
            ollie.DoTheCaterpillar();
            ollie.Jump();
        }
    }
}
