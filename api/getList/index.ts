import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const data = [{ id: 0 }, { id: 1 }, { id: 2 }];

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: data,
  };
};

export default httpTrigger;
