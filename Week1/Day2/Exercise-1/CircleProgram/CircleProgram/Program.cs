namespace CircleProgram
{
    internal class Program : Circle
    {
        public Program(int Radius) : base(Radius)
        {
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Circle c = new Circle(3);
            Console.WriteLine("area of circle is " + c.getArea());
            Console.WriteLine("Circumference  of circle is " + c.GetCircumference());
        }
    }
}




public class Circle
{
    int radius;
    public Circle(int Radius)
    {
        radius = Radius;
    }
    public double getArea()
    {

        return Math.PI * Math.Pow(radius, 2);
    }
    public double GetCircumference()
    {
        return 2 * Math.PI * radius;
    }
}
