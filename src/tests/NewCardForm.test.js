import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import NewCardForm from '../pages/NewCardForm';
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('Creating a new card using the form', () => {
  beforeEach(() => renderWithRouterAndRedux(<NewCardForm handleSubmit={() => {}} />));
  it('Should have the "save" button disabled by default', () => {
    const saveBtn = screen.getByRole('button', { name: /salvar/i });

    expect(saveBtn).toBeInTheDocument();
    expect(saveBtn).toBeDisabled();
  });

  it('Should render the name input', () => {
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
  });

  it('Should render the typed name', () => {
    const nameInput = screen.getByLabelText(/nome/i);
    userEvent.type(nameInput, 'name');
    expect(nameInput).toHaveValue('name');

    const renderedName = screen.getByTestId('name-card').textContent;
    expect(renderedName).toBe('name');
  })

  it('Should render the description input', () => {
    expect(screen.getByLabelText(/descrição/i)).toBeInTheDocument();
  });

  it('Should render the typed description', () => {
    const descInput = screen.getByLabelText(/descrição/i);

    userEvent.type(descInput, 'desc');
    expect(descInput).toHaveValue('desc');

    const description = screen.getByTestId('description-card').textContent;
    expect(description).toBe('desc');
  });

  it('Should render the attributes input', () => {
    expect(screen.getByLabelText(/ataque/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/inteligência/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/defesa/i)).toBeInTheDocument();
  });

  it('Should render the typed attributes', () => {
    const attr1Input = screen.getByLabelText(/ataque/i);
    const attr2Input = screen.getByLabelText(/inteligência/i);
    const attr3Input = screen.getByLabelText(/defesa/i);

    userEvent.type(attr1Input, '21');
    userEvent.type(attr2Input, '13');
    userEvent.type(attr3Input, '25');

    expect(attr1Input).toHaveValue(21);
    expect(attr2Input).toHaveValue(13);
    expect(attr3Input).toHaveValue(25);

    const attr1 = screen.getByTestId('attr1-card').textContent;
    const attr2 = screen.getByTestId('attr2-card').textContent;
    const attr3 = screen.getByTestId('attr3-card').textContent;
    expect(attr1).toBe('021')
    expect(attr2).toBe('013')
    expect(attr3).toBe('025')
  });

  it('Should render the image input', () => {
    expect(screen.getByLabelText(/imagem/i)).toBeInTheDocument();
  });
  
  it('Should render the image url', () => {
    const imgInput = screen.getByLabelText(/imagem/i);
    userEvent.type(imgInput, 'URL');

    expect(imgInput).toHaveValue('URL');
    
    const image = screen.getByTestId('image-card');
    expect(image).toBeInTheDocument();
  });

  it('Should render the rarity input and the options', () => {
    const rarityInput = screen.getByLabelText(/raridade/i);

    expect(rarityInput).toBeInTheDocument();
    expect(rarityInput.options[0].value).toBe('normal');
    expect(rarityInput.options[1].value).toBe('raro');
    expect(rarityInput.options[2].value).toBe('muito raro');
  });

  it('Should render the rarity "normal" by default', () => {
    expect(screen.getByLabelText(/raridade/i)).toHaveValue('normal');
    expect(screen.getByTestId('rare-card').textContent).toBe('normal');
  });

  it('Should render the selected rarity', () => {
    const rarityInput = screen.getByLabelText(/raridade/i);

    userEvent.selectOptions(rarityInput, 'raro');
    expect(rarityInput).toHaveValue('raro');

    const rarity = screen.getByTestId('rare-card').textContent;
    expect(rarity).toBe('raro');
  });

  it('Should enable the "save" button after filling the inputs', () => {
    userEvent.type(screen.getByLabelText(/nome/i), 'name');
    userEvent.type(screen.getByLabelText(/descrição/i), 'desc');
    userEvent.type(screen.getByLabelText(/imagem/i), 'url');
    expect(screen.getByRole('button', { name: /salvar/i })).toBeEnabled();
  });
});
