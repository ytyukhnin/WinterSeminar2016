using Microsoft.AspNet.Mvc;
using CollectionJson;
using System.Linq;
using System.Collections.Generic;

namespace Web
{
    [Route("api/reports")]
    public class ReportsController : Controller 
    {
        
        [Route("deals")]
        [HttpGet]
        public ReadDocument Deals() 
        {
            var deals = Enumerable
                            .Range(0, 10)
                            .Select( idx => new Deal("Deal " + idx, true, idx, idx, idx * 1.4f, idx * 5.6f));

            var doc = new ReadDocument
            {
                Collection =
                {
                    //Href = ,
                    Version = "1.0"
                }
            };

            foreach (var item in deals.Select(d => new Item
            {
                Data = new List<Data>
                {
                    new Data { Name = "name", Prompt = "Name", Value = d.Name },
                    new Data { Name = "state", Prompt = "State", Value = d.State.ToString() },
                    new Data { Name = "revenue", Prompt = "Revenue", Value = d.Revenue.ToString() },
                    new Data { Name = "actions", Prompt = "Auctions", Value = d.Auctions.ToString() },
                    new Data { Name = "impressions", Prompt = "Impressions", Value = d.Impressions.ToString() },
                    new Data { Name = "avgClearingCpm", Prompt = "Avg Clearing Cpm", Value = d.AvgClearingCpm.ToString() }
                }
                // ,
                // Links = new List<Link>
                // {
                //     new Link
                //     {
                //         Href = new Uri(string.Format(Url.Link<InstructorController>(x => x.Index()) + "{0}/courses/{1}/students", id, c.CourseID)),
                //         Prompt = "Students",
                //         Rel = "students"
                //     }
                // }
            }))
            {
                doc.Collection.Items.Add(item);
            }

            return doc;
        }
    }

}