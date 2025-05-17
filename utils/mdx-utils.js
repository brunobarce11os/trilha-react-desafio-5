import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

const {data} = await api.get('/posts', {
    params: {
        id: `eq.${id}`,
        select: 'title,description,body',
    },
});

if (data.length === 0) {
    return null;
}

return {
    title: data[0].title,
    description: data[0].description,
    body: data[0].body,
};
}