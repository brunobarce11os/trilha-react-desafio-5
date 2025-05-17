import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://incbnvsnsvgyrftvkimc.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluY2JudnNuc3ZneXJmdHZraW1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MDg2MTUsImV4cCI6MjA2Mjk4NDYxNX0.ezzZZckarhNU30sNVBzcWnU8Pxby-l0ao0ta6Sp13GY",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluY2JudnNuc3ZneXJmdHZraW1jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzQwODYxNSwiZXhwIjoyMDYyOTg0NjE1fQ.NcEE0HX02tt8mgqzRnwPoeU1P4iIB174j1HcTqGGTjI"
    }
})