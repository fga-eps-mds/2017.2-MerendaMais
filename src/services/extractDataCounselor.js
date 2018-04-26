const getManagerCounselorData = (counselor) => {
  const data = [
    {
      label: 'Nome:',
      value: counselor.name,
    },
    {
      label: 'CPF:',
      value: counselor.profile.cpf,
    },
    {
      label: 'Telefone:',
      value: counselor.profile.phone,
    },
  ];
  return data;
};

export default getManagerCounselorData;
