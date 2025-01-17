import { Request, Response } from "express";
import ConsumoCaloricoModel from "../models/ConsumoCaloricoModel";
import moment from "moment";

class ConsultaConsumoController {
  // Método para listar os consumos de calorias
  async listarConsumos(req: Request, res: Response) {
    const { userId, data, tipoRefeicao } = req.query;

    console.log("Parâmetros recebidos:", { userId, data, tipoRefeicao });

    const dataFormatada = moment(data as string).format("YYYY-MM-DD");

    try {
      const resultados = await ConsumoCaloricoModel.find({
        user: userId,
        tipoRefeicao: tipoRefeicao,
        data: dataFormatada,
      });

      console.log("Resultados da agregação:", resultados);

      // Verifica se não há resultados
      if (resultados.length === 0) {
        // Retorna zero para todos os totais, em vez de 404
        return res.status(200).json({
          alimentos: [],
          totalKcal: 0,
          totalProteina: 0,
          totalCarboidrato: 0,
          totalPeso: 0,
          totalAcucar: 0,
        });
      }

      // Se houver resultados, calcula os totais
      const totalKcal = resultados.reduce((acc, curr) => acc + curr.kcal, 0);
      const totalProteina = resultados.reduce(
        (acc, curr) => acc + curr.proteina,
        0
      );
      const totalCarboidrato = resultados.reduce(
        (acc, curr) => acc + curr.carboidrato,
        0
      );
      const totalPeso = resultados.reduce((acc, curr) => acc + curr.peso, 0);
      const totalAcucar = resultados.reduce(
        (acc, curr) => acc + curr.acucar,
        0
      );

      // Retorna os totais calculados
      return res.status(200).json({
        alimentos: resultados.map((consumo) => consumo.nomeAlimento),
        totalKcal,
        totalProteina,
        totalCarboidrato,
        totalPeso,
        totalAcucar,
      });
    } catch (error) {
      console.error("Erro ao listar consumos:", error);
      return res
        .status(500)
        .json({ message: "Erro ao listar consumos.", error });
    }
  }

  // Método para listar o total de calorias
  async listTotalKcal(req: Request, res: Response) {
    const { userId, data } = req.query;

    // Logando os parâmetros recebidos
    console.log("Parâmetros recebidos para totalKcal:", { userId, data });

    // Verificando se os parâmetros foram recebidos corretamente
    if (!userId || !data) {
      console.error("userId ou data não fornecidos.");
      return res
        .status(400)
        .json({ message: "userId e data são obrigatórios." });
    }

    const dataFormatada = moment(data as string).format("YYYY-MM-DD");
    console.log("Data formatada:", dataFormatada); // Logando a data formatada

    try {
      const resultados = await ConsumoCaloricoModel.find({
        user: userId,
        data: dataFormatada,
      });

      console.log("Resultados para totalKcal:", resultados);

      // Se não houver resultados, retornar 0 para todos os campos
      if (resultados.length === 0) {
        return res.status(200).json({
          totalKcal: 0,
          totalProteina: 0,
          totalCarboidrato: 0,
          totalPeso: 0,
          totalAcucar: 0,
        });
      }

      // Cálculo dos totais, com fallback para 0 se algum campo estiver null ou undefined
      const totalKcal = resultados.reduce(
        (acc, curr) => acc + (curr.kcal || 0),
        0
      );
      const totalProteina = resultados.reduce(
        (acc, curr) => acc + (curr.proteina || 0),
        0
      );
      const totalCarboidrato = resultados.reduce(
        (acc, curr) => acc + (curr.carboidrato || 0),
        0
      );
      const totalPeso = resultados.reduce(
        (acc, curr) => acc + (curr.peso || 0),
        0
      );
      const totalAcucar = resultados.reduce(
        (acc, curr) => acc + (curr.acucar || 0),
        0
      );

      // Retornando todos os totais
      return res.status(200).json({
        totalKcal,
        totalProteina,
        totalCarboidrato,
        totalPeso,
        totalAcucar,
      });
    } catch (error) {
      console.error("Erro ao listar totalKcal:", error);
      return res
        .status(500)
        .json({ message: "Erro ao listar totalKcal.", error });
    }
  }

  // Método para listar alimentos por refeição
  async listAlimentoRefeicao(req: Request, res: Response) {
    const { userId, data, tipoRefeicao } = req.query;
    console.log("Parâmetros recebidos para listAlimentoRefeicao:", {
      userId,
      data,
      tipoRefeicao,
    });
  
    const dataFormatada = moment(data as string).format("YYYY-MM-DD");
  
    try {
      const resultados = await ConsumoCaloricoModel.find({
        user: userId,
        tipoRefeicao: tipoRefeicao,
        data: dataFormatada,
      });
  
      console.log("Resultados para listAlimentoRefeicao:", resultados);
  
      // Alterado: Retorna resposta vazia se resultados forem nulos ou não tiverem itens
      if (!resultados || resultados.length === 0) {
        return res.status(200).json([]); // Retorna um array vazio
      }
  
      // Incluindo o `_id` junto com os outros dados
      const alimentos = resultados.map((consumo) => ({
        id: consumo._id, // Incluindo o ID para referência no frontend
        nome: consumo.nomeAlimento,
        peso: consumo.peso,
      }));
  
      return res.status(200).json(alimentos);
    } catch (error) {
      console.error("Erro ao listar alimentos por refeição:", error);
      return res
        .status(500)
        .json({ message: "Erro ao listar alimentos por refeição.", error });
    }
  }
  

  // Método para deletar um alimento
  async deletarConsumo(req: Request, res: Response) {
    const { id } = req.params;
    console.log("Tentando deletar o consumo com ID:", id);

    try {
      const resultado = await ConsumoCaloricoModel.findByIdAndDelete(id);

      if (!resultado) {
        return res.status(404).json({ message: "Consumo não encontrado." });
      }

      return res.status(200).json({ message: "Consumo deletado com sucesso." });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao deletar consumo.", error });
    }
  }
}

export default new ConsultaConsumoController();
