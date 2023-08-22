﻿using System.Xml.Linq;

namespace LinqToXmlApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Assume there is an XML document with the following structure:
            // <Books>
            //     <Book>
            //         <Title>Book Title 1</Title>
            //         <Author>Author 1</Author>
            //         <Genre>Genre 1</Genre>
            //     </Book>
            //     ...
            // </Books>
            // Write above book structure as a c# string
            string xmlString = @"<Books>
                                    <Book>
                                        <Title>Book Title 1</Title>
                                        <Author>Author 1</Author>
                                        <Genre>Genre 1</Genre>
                                    </Book>
                                    <Book>
                                        <Title>Book Title 2</Title>
                                        <Author>Author 2</Author>
                                        <Genre>Genre 2</Genre>
                                    </Book>
                                    <Book>
                                        <Title>Book Title 3</Title>
                                        <Author>Author 3</Author>
                                        <Genre>Genre 3</Genre>
                                    </Book>
                                </Books>";

            // Create an XDocument object from the XML string

            // Write the title of all books to the console

            // Write the title of all books with genre "Genre 1" to the console

            XDocument xdoc = XDocument.Parse(xmlString);

            IEnumerable<string> allTitles  = xdoc.Descendants("Title").Select(title => title.Value);
            Console.WriteLine("All Titles:");
            foreach (string title in allTitles)
            {
                Console.WriteLine(title);
            }

            IEnumerable<string> genre1Titles = xdoc.Descendants("Book")
                                   .Where(book => book.Element("Genre").Value == "Genre 2")
                                   .Select(book => book.Element("Title").Value);

            Console.WriteLine("\nTitles with Genre 2:");
            foreach (string title in genre1Titles)
            {
                Console.WriteLine(title);
            }

        }
    }
}