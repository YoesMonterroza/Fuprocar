import { useState } from 'react'

export const SpeedDialog = () => {
    const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({});

  const toggleShow = () => setShow(!show);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Este campo es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'Este campo es obligatorio';
    if (!formData.mensaje.trim()) newErrors.mensaje = 'Este campo es obligatorio';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form data submitted:', formData);
      setShow(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleShow}
        className={`position-fixed bottom-0 end-0 m-4 rounded-circle d-flex align-items-center justify-content-center btn ${show ? 'bg-secondary' : 'btn-primary'}`}
        style={{ width: '60px', height: '60px', fontSize: '24px', zIndex: 1050, color: 'white', border: 'none' }}
      >
        {show ? '✖' : '✉️'}
      </button>

      {show && (
        <div
          className="d-none d-md-block position-fixed bg-white shadow-lg rounded p-3"
          style={{
            top: 'auto',
            bottom: '90px',
            right: '20px',
            width: '320px',
            zIndex: 1040,
          }}
          onClick={toggleShow}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-primary mb-0">fuprocar</h5>
          </div>

          <div className="alert alert-info">
            ¡Hola! Haznos saber cómo te podemos ayudar y lo haremos lo antes posible.
          </div>

          <form noValidate onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                id="nombre"
                placeholder="Nombre*"
                value={formData.nombre}
                onChange={handleChange}
              />
              <label htmlFor="nombre">Nombre*</label>
              <div className="invalid-feedback">{errors.nombre}</div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Correo electrónico*"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Correo electrónico*</label>
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                id="mensaje"
                placeholder="¿Cómo te podemos ayudar?*"
                style={{ minHeight: '100px' }}
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="mensaje">¿Cómo te podemos ayudar?*</label>
              <div className="invalid-feedback">{errors.mensaje}</div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              ENVIAR
            </button>
          </form>
        </div>
      )}

      {show && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column d-md-none p-3" style={{ zIndex: 1040 }}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="text-primary mb-0">fuprocar</h5>
            <button type="button" className="btn-close" onClick={toggleShow}></button>
          </div>

          <div className="alert alert-info">
            ¡Hola! Haznos saber cómo te podemos ayudar y lo haremos lo antes posible.
          </div>

          <form noValidate onSubmit={handleSubmit} className="flex-grow-1">
            <div className="form-floating mb-3">
              <input
                type="text"
                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                id="nombre"
                placeholder="Nombre*"
                value={formData.nombre}
                onChange={handleChange}
              />
              <label htmlFor="nombre">Nombre*</label>
              <div className="invalid-feedback">{errors.nombre}</div>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                placeholder="Correo electrónico*"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Correo electrónico*</label>
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="form-floating mb-3">
              <textarea
                className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                id="mensaje"
                placeholder="¿Cómo te podemos ayudar?*"
                style={{ minHeight: '100px' }}
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="mensaje">¿Cómo te podemos ayudar?*</label>
              <div className="invalid-feedback">{errors.mensaje}</div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">
              ENVIAR
            </button>
          </form>
        </div>
      )}
    </>
  );
};