
require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  enable :sessions

  get '/' do
    p params[:temp]
    @temp = session[:temp] 
    erb :index
  end

  get '/thermostat' do
    # p session[:temp]
    if session[:temp]
      JSON.generate({temperature: session[:temp]})
    else
      JSON.generate(temperature: 20)
    end
    # redirect '/'
  end

  post '/thermostat' do
    p params[:temp]
    session[:temp] = params[:temp].to_i
    JSON.dump(temperature: session[:temp])
    # redirect '/thermostat'
  end

  run! if app_file == $0
end