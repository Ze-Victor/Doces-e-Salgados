import React from 'react';

import { FiPlusCircle } from 'react-icons/fi'

import './styles.css'

const Product = () => {
  return (
    <div className="cadastrarProduto">
      <form>
        <h1>Cadastro do novo produto</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field-group">

            <div className="field-name">
              <label htmlFor="productName">Nome do Produto</label>

              <input type="text" name="productName" id="productName" />
            </div>
            <div className="field-box">
              <label htmlFor="productSize">Tamanho</label>

              <select
                name="size"
                id="size"
              >
                <option value="0">Selecione uma tamanho</option>
                <option value="1">P</option>
                <option value="1">M</option>
                <option value="1">G</option>
                <option value="1">U</option>
              </select>
            </div>

          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="productValue">Valor do Produto</label>

              <input type="number" name="productValue" id="productValue" />
            </div>
            <div className="field">
              <label htmlFor="productCode">Custo de produção</label>

              <input type="number" name="productCode" id="productCode" />
            </div>
          </div>

        </fieldset>

        <div className="buttonSubmit">
          <a href="./cadastro" target="none">Cadastrar <FiPlusCircle /> </a>
        </div>


      </form>

    </div>
  );
}

export default Product;