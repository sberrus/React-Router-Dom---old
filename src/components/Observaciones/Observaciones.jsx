import React from "react";

const Observaciones = () => {
	return (
		<div className="mt-5">
			<hr />
			<div className="accordion" id="accordionObservaciones">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							<h5>Observaciones de la nueva actualización</h5>
						</button>
					</h2>
					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingOne"
						data-bs-parent="#accordionExample"
					>
						<div className="accordion-body">
							<ul>
								<li>
									<h5>
										El <code>Switch</code> pasa a ser{" "}
										<code>Routes</code>
									</h5>
									<p>
										En la última actualización conocida al
										momento de crear esta guía siendo la
										V6.0.0, El <code>Switch</code> pasa a
										ser <code>Routes</code>.
									</p>
									<p>
										Su función es el de al momento de que la
										url coincida con algunas de las rutas
										declaradas, este renderizara el
										componente que se le especifique en
										dicha ruta.
									</p>
								</li>
								<li>
									<h5>
										Ya no es necesario la prop{" "}
										<code>exact</code>
									</h5>
									<p>
										En la versión 6.0.0 parece que ya no es
										necesaria la prop <code>exact</code>{" "}
										para definir una ruta exacta.
									</p>
								</li>
								<li>
									<h5>
										La prop <code>activeClass</code> pasa a
										ser <code>activeclass</code> en
										minúsculas
									</h5>
								</li>
								<li>
									<h5>
										Al igual que con las rutas, ahora los{" "}
										<code>NavLink</code> no necesitan
										especificar con el atributo{" "}
										<code>exact</code>
									</h5>
								</li>
								<li>
									<h5>
										Ahora el hook <code>useHistory</code> se
										utiliza como <code>useNavigate</code>
									</h5>
								</li>
								<li>
									<h5 className="text-success">
										Ver todos los cambios de la versión
										v6.0.0 de{" "}
										<a href="https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory">
											react-router-dom
										</a>
									</h5>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Observaciones;
