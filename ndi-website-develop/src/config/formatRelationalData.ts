/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

interface IModelData {
  [key: string]: any
}
const FormatRelationalData = async (
  model: {
    [x: string]: IModelData[]
  }[],
  relationalModel: string[]
  // eslint-disable-next-line consistent-return
): Promise<any> => {
  const postsData = []
  if (model && model.length > 0) {
    for await (const post of model) {
      let dataObj: IModelData = post
      for (const relt of relationalModel) {
        const comment = (await post[relt].values)
          ? await post[relt].values
          : await post[relt]
        dataObj = {
          ...dataObj,
          [`${relt}`]: comment
        }
      }
      postsData.push(dataObj)
    }
    return postsData
  }
}

export default FormatRelationalData
