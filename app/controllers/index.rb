get '/'   do
  erb :racetrack
end

post '/players' do
  p1 = Player.create(name: params[:player1])
  p2 = Player.create(name: params[:player2])
  g = Game.create()
  r1 = Round.create(player_id: p1.id, game_id: g.id)
  r2 = Round.create(player_id: p2.id, game_id: g.id)
  if request.xhr?
    true
  else
    redirect '/'
  end
end
