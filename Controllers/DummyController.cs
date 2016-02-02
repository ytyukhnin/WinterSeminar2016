using Microsoft.AspNet.Mvc;

[Route("api/dummy")]
public class DummyController 
{
    public string Get() 
    {
        return "I'm dummy";    
    }    
}