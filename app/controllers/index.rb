get '/'   do
  erb :racetrack
end

post '/players' do
  Player.create(name: params[:player1])
  Player.create(name: params[:player2])
  if request.xhr?
    true
  else
    redirect '/'
  end
end
