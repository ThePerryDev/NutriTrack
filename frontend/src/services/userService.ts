import { UsersProps } from "../types";
import api from "./api";

class UsersService {
  async get(): Promise<UsersProps[]> {
    const { data } = await api.get("/user");
    return data;
  }

  async post(props: {
    email: string;
    password: string;
    name: string;
    nickname: string;
    height: number;
    weight: number;
    activityLevel: "sedentario" | "pouco ativo" | "ativo" | "muito ativo";
    gender: "masculino" | "feminino";
    goal: "perda de peso" | "manutenção de peso" | "ganho de peso";
    birthdate: Date;
    nutricionista?: string;
    isLogged: boolean;
  }): Promise<any> {
    const { data } = await api.post("/user", props);
    console.log(data);
    return data;
  }

  async put(props: {
    id: string;
    email: string;
    password: string;
    name: string;
    nickname: string;
    height: number;
    weight: number;
    activityLevel: "sedentario" | "pouco ativo" | "ativo" | "muito ativo";
    gender: "masculino" | "feminino";
    goal: "perda de peso" | "manutenção de peso" | "ganho de peso";
    birthdate: Date;
    nutricionista?: string;
    isLogged: boolean;
  }): Promise<any> {
    const { data } = await api.put("/user", props);
    return data;
  }

  async listById(id: string) {
    const { data } = await api.get(`/user/${id}`);
    return data;
  }

  async delete(id: string): Promise<any> {
    const { data } = await api.delete("/user", { data: { id } });
    return data;
  }  

}

const service = new UsersService();
export default service;
