import { HoudiniClient } from '$houdini';

const url = 'https://admin.studio-mdt.fr/graphql'

export default new HoudiniClient({
	url,

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) { 
	//     return { 
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
})