using Google.Apis.Gmail.v1.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GmailApi.ViewModels.HomeViewModels
{
    public class GetInformationsViewModel
    {
        public IList<Label> Labels { get; set; }
        public IList<Message> Messages { get; set; }
    }
}
