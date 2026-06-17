import { mapTilerInstance } from ".";

export const fetchMap = async (): Promise<unknown> => {
  const response = await mapTilerInstance.get(
    "019ebb45-cdd7-70b5-a93e-dbdf42973f7b/style.json",
  );
  return response.data;
};
