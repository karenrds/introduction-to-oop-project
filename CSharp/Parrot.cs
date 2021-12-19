using System;

public class Parrot : Bird
{
	public Parrot(string name, string color) : base(name, color)
	{
	}

    public override void Speak()
    {
        Console.WriteLine($"Hi! I'm {Name} and I'm a {Color} parrot.");
        Console.WriteLine("Happy Bird-day to meee!");
    }
}
