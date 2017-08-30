using GmailApi.ViewModels.HomeViewModels;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Gmail.v1;
using Google.Apis.Gmail.v1.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace GmailApi.Services
{
    public class HomeService
    {
        static string[] Scopes = { GmailService.Scope.GmailReadonly };
        static string ApplicationName = "Gmail API .NET Quickstart";
        public GetInformationsViewModel GetInformations()
        {
            string path = HttpContext.Current.Server.MapPath("~/App_Data/client_secret.json");
            UserCredential credential;

            using (var stream =
                new FileStream(path, FileMode.Open, FileAccess.Read))
            {
                string credPath = System.Environment.GetFolderPath(
                    System.Environment.SpecialFolder.Personal);
                credPath = Path.Combine(credPath, ".credentials/gmail-dotnet-quickstart.json");

                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true)).Result;
            }
            // Create Gmail API service.
            var service = new GmailService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });
            // Define parameters of request.
            UsersResource.LabelsResource.ListRequest request = service.Users.Labels.List("me");
            // List labels.
            IList<Label> labels = request.Execute().Labels;

            UsersResource.MessagesResource.ListRequest requestMessages = service.Users.Messages.List("me");
            IList<Message> messages = requestMessages.Execute().Messages;
            List<Message> messagesFull = new List<Message>();
            foreach (var message in messages)
            {
                var messageFull = service.Users.Messages.Get("me", message.Id).Execute();
                messagesFull.Add(messageFull);
            }
            

            var getInformationsViewModel = new GetInformationsViewModel();
            getInformationsViewModel.Labels = labels;
            getInformationsViewModel.Messages = messagesFull;
            return getInformationsViewModel;
        }
        public static Message GetMessage(GmailService service, String userId, String messageId)
        {
            try
            {
                return service.Users.Messages.Get(userId, messageId).Execute();
            }
            catch (Exception e)
            {
                Console.WriteLine("An error occurred: " + e.Message);
            }

            return null;
        }
    }
}

