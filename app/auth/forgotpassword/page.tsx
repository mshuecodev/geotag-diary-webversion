import React from "react"

function LoginPage() {
	return (
		<main>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					{/* <img
					alt="Your Company"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/> */}
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<h4 className="mb-2 text-center text-sm font-semibold text-gray-900">Reset your password</h4>
					<p className="mb-10 text-center text-sm">Enter your email and we'll send you a link to reset your password.</p>
					<form
						action="#"
						method="POST"
						className="space-y-6"
					>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									required
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Reset your password
							</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	)
}

export default LoginPage
