import { Form } from '@unform/web';
import { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { CountriesData, getAllCountries } from '../../service/api';
import { Button } from '../Button/Button';
import { Dropdown, Option } from '../Dropdown';
import UnformInput from '../Fields/UnformInput';

const countriesDto = (countrie: CountriesData[]): Option[] => {
  return countrie.map((c) => ({
    id: c.phoneCode,
    label: c.abbr,
    image: c.img,
  }));
}

type DataForm = {
  phone: string
  prefix: number
}

const FormCountries = () => {
  const [countries, setCountries] = useLocalStorage<CountriesData[]>('countries', []);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await getAllCountries()
    setLoading(false);
    setCountries(response);
  }, [loading, countries]);


  const handleSubmit = useCallback((data: DataForm) => {
    alert(JSON.stringify(data))

  }, [])


  useEffect(() => {
    !countries.length && fetchData();
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Dropdown name='prefix' loading={loading} options={countriesDto(countries)} />
        <UnformInput placeholder='Your Phone' name="phone" />
        <Button type='submit'>Submit</Button>
      </div>
    </Form>
  )
}

export default FormCountries