namespace Factorial
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Factorial Program !");
            Console.WriteLine("enter an number ");
            Int32 num = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("number is " + num);

            Int32 result = num;
            Int32 count = 1;

            while (count < num)
            {
                result = result * count;
                Console.WriteLine(result);
                count++;

            }
            Console.WriteLine("facorial is " + result);



        }
    }
}