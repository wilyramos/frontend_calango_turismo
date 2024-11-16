import { Link } from "react-router-dom"
import React, { useState } from "react"
import Alerta from "../components/Alerta"
import axios from "axios"

interface msg {
  msg: string
}



export default function Registrar() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  
  const [ interests, setInterests] = useState<string[]>([]);
  const [ budget, setBudget ] = useState(0)
  const [preferences, setPreferences] = useState<{ interests: string[], budget: number }>({
    interests: [],
    budget: 0
  });
  const [alerta, setAlerta] = useState({ tipo: '', mensaje: '' })


  // interests array strings 


  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    
    if(checked) {
      setInterests([...interests, value])
    } else {
      setInterests(interests.filter((interest) => interest !== value))
    }

  // Actualizar las preferencias incluyendo los intereses
  setPreferences({
    ...preferences,
    interests: checked ? [...interests, value] : interests.filter((interest) => interest !== value,
  )
  });
  }



  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if([name, email, password, confirmPassword].includes('')) {
      setAlerta({ tipo: 'error', mensaje: 'Todos los campos son obligatorios' })
      return
    }
    

    console.log('validando campos')
    
    if([name, email, password, confirmPassword].includes('')) {
      setAlerta({ tipo: 'error', mensaje: 'Todos los campos son obligatorios' })
      return
    }

    if(password !== confirmPassword) {
      setAlerta({ tipo: 'error', mensaje: 'Las contraseñas no coinciden' })
      return
    }

    if(password.length < 6) {
      setAlerta({ tipo: 'error', mensaje: 'La contraseña debe tener al menos 6 caracteres' })
      return
    }

    setAlerta({ tipo: 'success', mensaje: 'Usuario registrado correctamente' })
    
    try{
      const url= 'http://localhost:5000/api/usuarios'



      console.log(name, email, password, interests, budget)
      await axios.post(url, { name, email, password, preferences })
      setAlerta({ tipo: 'success', mensaje: 'Usuario registrado correctamente' })      

    } catch (error) {

      setAlerta({ 
        tipo: 'error',
        mensaje: error.response.data.error
      })
      
    }
  }



  return (
    <>
      <div className="flex items-center justify-center p-6 bg-gray-100">
        <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Registrar</h2>
          <Alerta alerta={alerta} />
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}

              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                id="confirmPassword"
                required
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>


            {/* Selección de intereses */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Intereses</label>
              <div className="space-y-1 grid grid-cols-2">
                <label className="block">
                  <input
                    type="checkbox"
                    value="Naturaleza"
                    checked={interests.includes('Naturaleza')}
                    onChange={handleInterestChange}
                    className="mr-2"

                  />
                  Naturaleza
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Cultura"
                    checked={interests.includes('Cultura')}
                    onChange={handleInterestChange}
                    className="mr-2"
                  />
                  Cultura
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Deportes"
                    checked={interests.includes('Deportes')}
                    onChange={handleInterestChange}
                    className="mr-2"
                  />
                  Deportes
                </label>
                <label className="block">
                  <input
                    type="checkbox"
                    value="Gastronomía"
                    checked={interests.includes('Gastronomía')}
                    onChange={handleInterestChange}
                    className="mr-2"
                  />
                  Gastronomía
                </label>
              </div>
            </div>
            <div className="mb-6">
              <input
                type="number"
                id="budget"
                name="budget"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="block w-full border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
                placeholder="Presupuesto"
              />
            </div>

            <input
              type="submit"
              value="Registrar"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
              
            />
          </form>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes una cuenta? {' '}
              <Link to="/login" className="text-blue-600 hover:underline font-bold">
                Inicia sesión.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
